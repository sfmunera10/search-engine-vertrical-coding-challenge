import React, { useRef } from "react";
import "./SearchField.styles.css";
import Button from "../button/Button";

interface Props {
    todo?: string;
    setTodo?: React.Dispatch<React.SetStateAction<string>>;
    handleAdd?: (e: React.FormEvent) => void;
};

const SearchField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="search__field" onSubmit={(e) => {
            console.log("onSubmit", e);
        }}>
            <input type="input" ref={inputRef} value={todo}
                onChange={(e) => console.log("onChange", e)}
                placeholder="Search by Title..." className="search__field__box" />
            <div className="search__field__submit">
                <Button
                    className="primary"
                    type="submit"
                    height="50px"
                    onClick={() => console.log("You clicked on the pink circle!")}
                    border="none"
                    borderRadius="8px"
                    width="120px"
                    childrenText="Go"
                />
            </div>
        </form>
    )
};

export default SearchField;