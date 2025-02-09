import Footer from "./components/footer/Footer.tsx";
import Button from "./components/footer/Button.tsx";
import ButtonClassComponent from "./components/footer/ClassComponent.tsx";
import { useContext, useEffect, useState } from "react";
import { THEME_CONTEXT } from "./context/ThemeContext.tsx";

interface ProductType {
    id: number;
    title: string;
    images: string[];
}

const App = () => {
    const [loading, setLoading] = useState(true);
    const [login, setLogin] = useState("login");
    const [data, setData] = useState<ProductType[]>([]);
    const themeContext = useContext(THEME_CONTEXT);

    if (!themeContext) {
        return <div>Error: ThemeContext is not available</div>;
    }

    const { theme, setTheme } = themeContext;

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((products) => {
                console.log(products);
                setData(products);
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <button
                className="p-2  border rounded "
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>


            {data.map((product) => (
                <div key={product.id}>
                    <img width={300} src={product.images[0]} alt={product.title} />
                    <h2>{product.title}</h2>
                </div>
            ))}

            <Footer name="hello" number={100} />
            <Button className="btn1" name="okey" />
            <Button className="btn2" name={login} />
            <Button className="btn3" name="delete" />
            <ButtonClassComponent />
        </div>
    );
};

export default App;
