export default function Logo({ size = 1.8, color = "white" }) {
    return (
        <div>
            <span
                className=" font-extralight"
                style={{ fontSize: `${size}rem`, color: color }}
            >
                Uber
            </span>
        </div>
    );
}
