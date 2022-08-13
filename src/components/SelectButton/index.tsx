import { ButtonEffect} from './styles'

function SelectButton() {
    const handleClick = (e: any) => {
        e.preventDefault();
        alert("Soon Feature");
    }

    return (
        <ButtonEffect onClick={handleClick}>
            Select your file for inspect
        </ButtonEffect>
    )
}

export default SelectButton