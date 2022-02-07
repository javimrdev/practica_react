import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface Props {
    onSubmitHandler: (value: string) => void;
    defaultValue: string;
}

export const SearcherComponent: React.FC<Props> = (props) => {
    const { onSubmitHandler, defaultValue } = props;
    const [value, setValue] = React.useState<string>(defaultValue);

    return (
        <form onSubmit={() => onSubmitHandler(value)}>
            <TextField id="outlined-basic" variant="outlined" defaultValue={value} onKeyUp={(event: any) => setValue(event.target.value)} />
            <Button type="submit" variant="contained">Search</Button>
        </form>
    )
}