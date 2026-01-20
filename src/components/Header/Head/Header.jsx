import amazonIcon from '../../../assets/icons/amazon.webp'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import './Header.css'
import { useState } from 'react';



export default function Header() {

    const [searchQuery, setSearchQuery] = useState("");

    function handleSearchQuery(e) {
        setSearchQuery(e.target.value);
    }

    return (
        <div className='header-main'>
            <div className="header-logo">
                <img src={amazonIcon} alt="amazon-icon" />
            </div>
            <div className='header-deliver'>
                <span className='block'>Deliver to</span>
                <span><FaMapMarkerAlt className='inline' /> India</span>
            </div>
            <div className='header-search'>
                <select>
                    <option value="all">All</option>
                </select>
                <input value={searchQuery} onChange={handleSearchQuery} type="text" placeholder='Search Amazon' />
                <button type='button'><MdOutlineSearch /></button>
            </div>
            <div>EN Language</div>
            <div>Accounts & List</div>
            <div>Returns & Orders</div>
            <div>Cart</div>
        </div>
    );
}
