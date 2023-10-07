import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Math({e}: {e: string}) {
    return(<BlockMath math={e} />)
}