import React from 'react'
import "./dashboard.css"

export default function dashboard() {
    return (
        <div className='dashboard flex flex-col'>
            <div className='people-row flex flex-col gap-4'>
                <div className='flex'>
                    <div className='people'>People</div>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <div className='people-category'>Trending</div>
                    <div className='people-category'>Latest</div>
                    <div className='people-category'>Founders</div>
                    <div className='people-category'>Investors</div>
                    <div className='people-category'>Politicians</div>
                    <div className='people-category'>Influencers</div>
                    <div className='people-category'>Bitcoin Maxis</div>
                    <div className='people-category'>Etherium Eco</div>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Ross Ulbricht</div>
                        <div className='text-sm creator'>Creator at Silk Road</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Ross Ulbricht</div>
                        <div className='text-sm creator'>Creator at Silk Road</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Ross Ulbricht</div>
                        <div className='text-sm creator'>Creator at Silk Road</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Ross Ulbricht</div>
                        <div className='text-sm creator'>Creator at Silk Road</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Ross Ulbricht</div>
                        <div className='text-sm creator'>Creator at Silk Road</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Ross Ulbricht</div>
                        <div className='text-sm creator'>Creator at Silk Road</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='company-row flex flex-col gap-4'>
                <div className='flex'>
                    <div className='people'>Companies</div>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <div className='people-category'>Trending</div>
                    <div className='people-category'>Latest</div>
                    <div className='people-category'>Exchanges</div>
                    <div className='people-category'>Venture Capital</div>
                    <div className='people-category'>Development</div>
                    <div className='people-category'>Research</div>
                    <div className='people-category'>Media</div>
                    <div className='people-category'>Marketing</div>
                    <div className='people-category'>DeFi</div>
                    <div className='people-category'>Nonprofit</div>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Coinbase</div>
                        <div className='text-sm creator'>Leading Digital Company</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Coinbase</div>
                        <div className='text-sm creator'>Leading Digital Company</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Coinbase</div>
                        <div className='text-sm creator'>Leading Digital Company</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Coinbase</div>
                        <div className='text-sm creator'>Leading Digital Company</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Coinbase</div>
                        <div className='text-sm creator'>Leading Digital Company</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Coinbase</div>
                        <div className='text-sm creator'>Leading Digital Company</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='company-row flex flex-col gap-4'>
                <div className='flex'>
                    <div className='people'>Products</div>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <div className='people-category'>Latest</div>
                    <div className='people-category'>Wallets</div>
                    <div className='people-category'>Games</div>
                    <div className='people-category'>Trading Apps</div>
                    <div className='people-category'>Social Apps</div>
                </div>
                <div className='flex flex-wrap gap-4'>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Polaris</div>
                        <div className='text-sm creator'>A cross chain DeFi Platform</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Polaris</div>
                        <div className='text-sm creator'>A cross chain DeFi Platform</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Polaris</div>
                        <div className='text-sm creator'>A cross chain DeFi Platform</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Polaris</div>
                        <div className='text-sm creator'>A cross chain DeFi Platform</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Polaris</div>
                        <div className='text-sm creator'>A cross chain DeFi Platform</div>
                    </div>
                    </div>
                    <div className='persons flex gap-1'>
                    <img className='' width={50} src="ico-person.svg" alt='menu'/>
                    <div className='flex flex-col gap-1'>
                        <div className='font-bold'>Polaris</div>
                        <div className='text-sm creator'>A cross chain DeFi Platform</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
