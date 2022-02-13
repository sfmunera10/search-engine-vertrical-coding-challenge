import React, { useRef } from "react";
import "./SearchField.styles.css";
import Button from "../button/Button";

interface Props {
    searchQuery: string | null;
    setSearchQuery: React.Dispatch<React.SetStateAction<string | null>>;
    handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchField: React.FC<Props> = ({ searchQuery, setSearchQuery, handleSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="search__field" onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            handleSearch(event);
            inputRef.current?.blur();
        }}>
            <input type="input" ref={inputRef} value={searchQuery ? searchQuery : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                placeholder="Search by Title..." className="search__field__box" />
            <div className="search__field__submit">
                <Button
                    className="primary"
                    type="submit"
                    height="50px"
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