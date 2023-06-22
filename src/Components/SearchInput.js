import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/esm/Button';
import IconSearch from './SearchIcon';
import 'bootstrap/dist/css/bootstrap.css';

function SearchInput() {
    return (
        <>
            <div className='container justify-content-center'>
                <InputGroup>
                    <DropdownButton variant="outline-secondary" title="All" id="input-group-dropdown-3">
                        <Dropdown.Item href="#">New Arrivals</Dropdown.Item>
                        <Dropdown.Item href="#">Seasonal Collection</Dropdown.Item>
                        <Dropdown.Item href="#">Trending Collection</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">All Deals</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control aria-label="Text input with a dropdown and a button" />
                    <Button variant="outline-secondary" id="button-addon2"><IconSearch /></Button>
                </InputGroup>
            </div>
        </>
    );
}

export default SearchInput;