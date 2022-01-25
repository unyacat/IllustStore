import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import SearchBar from "material-ui-search-bar";
import React, {useState} from "react";

const filterOptions = createFilterOptions({
    limit: 6
});


export default function AutocompleteSearchBar(props: any) {
    const value = props.value;
    const setValue = props.onChange;
    const [key, setKey] = useState(false);
    return (
        <Autocomplete
            multiple
            filterOptions={filterOptions}
            className={props.className}
            style={props.style}
            freeSolo
            options={props.options}
            key={key.toString()}
            onChange={async (event: any, newValue: any) => {
                setValue(newValue.join(" "));
                props.search(newValue.join(" "))();
            }}
            renderInput={(params: any) => {
                return (
                    <>
                        <SearchBar
                            {...{ ...params.inputProps, ref: null }}
                            onCancelSearch={async () => {
                                setValue("");
                                props.search("")();
                                setKey(!key);
                            }}
                            style={props.style}
                            className={props.onlyMobile}
                            value={value}
                            onChange={(newValue) => {
                                if (newValue === "")
                                    setValue("");
                                    props.search("")();
                                params.inputProps.onChange({ target: { value: newValue.split(" ").slice(-1)[0] } });
                                setValue(newValue)
                            }}
                            onRequestSearch={props.onRequestSearch}
                        />
                        <div ref={params.InputProps.ref}>
                            <div {...params.inputProps} />
                        </div>
                    </>
                )
            }
            }
        />
    )
}