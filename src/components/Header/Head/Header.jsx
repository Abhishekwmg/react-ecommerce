import amazonIcon from '../../../assets/icons/amazon.webp'

export default function Header() {
    return (
        <div className='w-full flex justify-between bg-[#232f3e] min-h-[45px] text-white font-medium'>
            <div className="w-20">
                <img src={amazonIcon} alt="amazon-icon" />
            </div>
            <div>Deliver to India</div>
            <div>Search</div>
            <div>EN Language</div>
            <div>Accounts & List</div>
            <div>Returns & Orders</div>
            <div>Cart</div>
        </div>
    );
}
