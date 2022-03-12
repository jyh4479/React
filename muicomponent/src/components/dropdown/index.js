import React, {useRef} from "react";
import "./dropdown.css"
import {AddBoxRounded} from "@mui/icons-material";


const Dropdown = props => {
    // 직접 돔을 조작하는 아래 로직
    // let subMenuList
    // useEffect(() => {
    //     subMenuList = document.querySelectorAll(".sub-menu")
    // }, [])

    // 돔을 조작할때 리액트에서는 Ref 사용을 권고하는데 동작 원리와 이유 찾아보기
    const subMenuList = useRef([]);

    const open = key => {
        const subMenu = subMenuList.current[key]
        const childCount = subMenu.childElementCount

        if (subMenu.classList.contains("hide")) {
            subMenu.style.maxHeight = `${childCount * 50}px`
            subMenu.classList.remove("hide")
            subMenu.classList.add("show")
        } else if (subMenu.classList.contains("show")) {
            subMenu.style.maxHeight = `0px`
            subMenu.classList.remove("show")
            subMenu.classList.add("hide")
        }
    }

    return (<div className={"container"}>
        <ul className={"menu"}>
            <li>
                <div>
                    Menu1
                    <AddBoxRounded onClick={() => open(0)}/>
                </div>
                <ul ref={el => subMenuList.current[0] = el} className={"sub-menu hide"}>
                    <li>
                        <div>Sub1</div>
                    </li>
                    <li>
                        <div>Sub2</div>
                    </li>
                    <li>
                        <div>Sub3</div>
                    </li>
                </ul>
            </li>


            <li>
                <div>Menu2
                    <AddBoxRounded onClick={() => open(1)}/>
                </div>
                <ul ref={el => subMenuList.current[1] = el} className={"sub-menu hide"}>
                    <li>
                        <div>Sub1</div>
                    </li>
                    <li>
                        <div>Sub2</div>
                    </li>
                </ul>
            </li>


            <li>
                <div>Menu3
                    <AddBoxRounded onClick={() => open(2)}/>
                </div>
                <ul ref={el => subMenuList.current[2] = el} className={"sub-menu hide"}>
                    <li>
                        <div>Sub1</div>
                    </li>
                    <li>
                        <div>Sub2</div>
                    </li>
                    <li>
                        <div>Sub3</div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>)
}

export default Dropdown;