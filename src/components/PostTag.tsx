import './PostTag.css';
import {Tag} from "../models/Tag.ts";
import React from "react";

interface PostTagProps {
    tag: Tag,
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function PostTag({ tag, onClick }: PostTagProps) {
    return (
        <div onClick={onClick} style={{
            backgroundColor: tag.color,
            border: `${tag.color} solid 2px`,
        }} className="tag">
            <p>{ tag.name }</p>
        </div>
    )
}