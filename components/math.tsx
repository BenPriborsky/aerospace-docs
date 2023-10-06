import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Math({children}: {children: string}) {
    return(<BlockMath>{children}</BlockMath>)
}