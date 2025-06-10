import './PostTag.css';
import {Tag} from "../models/Tag.ts";

export default function PostTag({ name, color }: Tag) {
    return (
        <div style={{
            backgroundColor: color,
            border: `${color} solid 2px`,
        }} className="tag">
            <p>{ name }</p>
        </div>
    )
}