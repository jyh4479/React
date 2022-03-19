import React, {useEffect, useRef} from "react";
import "./style.css";

const DragDiv = () => {

    const divRef = useRef(null);
    const lineRefs = useRef([]);

    let curWidth = 200;
    let curHeight = 100;

    useEffect(() => {
        // divRef.current.addEventListener("click", evnet);
        lineRefs.current.forEach(el => {
            if (el.classList.contains("bottom")) {
                el.addEventListener("drag", e => dragBottom(e));
            } else if (el.classList.contains("right")) {
                el.addEventListener("drag", e => dragRight(e));
            }
        })
    }, [])

    const dragBottom = e => {
        const divPosition = divRef.current.getBoundingClientRect();
        divRef.current.style.height = `${curWidth + (e.pageY - divPosition.bottom)}px`
        curWidth = curWidth + (e.pageY - divPosition.bottom)

        console.log(divPosition.bottom);
        console.log(e.pageY)
        // console.log(window.scrollY);
    }

    const dragRight = e => {
        const divPosition = divRef.current.getBoundingClientRect();
        divRef.current.style.width = `${curHeight + (e.pageX - divPosition.right)}px`
        curHeight = curHeight + (e.pageX - divPosition.right)

        console.log(divPosition.right);
        console.log(e.pageX)
    }

    return (
        <div className={"drag-container"}>
            <div ref={divRef} className={"item"}>
                DIV TEST
                <div ref={el => lineRefs.current[0] = el} className={"line top"} draggable={true}/>
                <div ref={el => lineRefs.current[1] = el} className={"line left"} draggable={true}/>
                <div ref={el => lineRefs.current[2] = el} className={"line right"} draggable={true}/>
                <div ref={el => lineRefs.current[3] = el} className={"line bottom"} draggable={true}/>
            </div>
        </div>
    )
}

export default DragDiv;