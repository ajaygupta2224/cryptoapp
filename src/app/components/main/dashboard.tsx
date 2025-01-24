import React from 'react'
import "./dashboard.scss"

export default function dashboard() {
    return (
        <div className='dashboard flex flex-col'>
            <div className='title flex flex-col'>
                <span className='font-bold text-2xl'>Directory</span>
                <span className='mt-2 explore'>Explore hundreds of companies, products and people working at the forefront of crypto and web3.</span>
                <div className='flex items-center mt-4'>
                    <input type="text" placeholder='search...' className="search-container" name="search" />
                    <span className='submit flex cursor-pointer'>
                        <img width={30} src="ico-search-grey.svg" alt='person' />
                    </span>
                </div>
            </div>
            <div className='trending flex items-center gap-2'>
                <span className='trending1'>Trending</span>
                <div className='flex scroll-animation gap-2'>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                    <span className='object flex items-center gap-1'>
                        <img className='logo rounded-xs' width={20} src="ico-person.svg" alt='person' />
                        <span>Elon Musk</span>
                    </span>
                </div>

            </div>

            <div className='people flex flex-col'>
                <span className='people-header flex items-center'>
                    <span className='people-div'></span>
                    <span>People</span>
                </span>
                <div className='flex flex-wrap mt-2 gap-2'>
                    <span className='people-widget flex items-center'>
                        Trending
                    </span>
                    <span className='people-widget flex items-center'>
                        Latest
                    </span>
                    <span className='people-widget flex items-center'>
                        Founders
                    </span>
                    <span className='people-widget flex items-center'>
                        Investors
                    </span>
                    <span className='people-widget flex items-center'>
                        Politicians
                    </span>
                    <span className='people-widget flex items-center'>
                        Influencers
                    </span>
                    <span className='people-widget flex items-center'>
                        Bitcoin Maxis
                    </span>
                    <span className='people-widget flex items-center'>
                        Etherium Eco
                    </span>
                </div>
            </div>
            <div className='people-grid flex flex-wrap'>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Ross Ulbricht</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>Creator at Silk Road</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Ross Ulbricht</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>Creator at Silk Road</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Ross Ulbricht</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>Creator at Silk Road</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Ross Ulbricht</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>Creator at Silk Road</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Ross Ulbricht</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>Creator at Silk Road</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Ross Ulbricht</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>Creator at Silk Road</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Ross Ulbricht</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>Creator at Silk Road</span>
                    </span>
                </div>
            </div>
            <div className='people flex flex-col'>
                <span className='people-header flex items-center'>
                    <span className='people-div'></span>
                    <span>Companies</span>
                </span>
                <div className='flex flex-wrap mt-2 gap-2'>
                    <span className='people-widget flex items-center'>
                        Trending
                    </span>
                    <span className='people-widget flex items-center'>
                        Latest
                    </span>
                    <span className='people-widget flex items-center'>
                        Exchanges
                    </span>
                    <span className='people-widget flex items-center'>
                        Venture Capital
                    </span>
                    <span className='people-widget flex items-center'>
                        Development
                    </span>
                    <span className='people-widget flex items-center'>
                        Research
                    </span>
                    <span className='people-widget flex items-center'>
                        Media
                    </span>
                    <span className='people-widget flex items-center'>
                        marketing
                    </span>
                    <span className='people-widget flex items-center'>
                        DeFi
                    </span>
                    <span className='people-widget flex items-center'>
                        NonProfit
                    </span>
                </div>
            </div>
            <div className='people-grid flex flex-wrap'>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Coinbase</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A leading Digital currency company</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Coinbase</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A leading Digital currency company</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Coinbase</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A leading Digital currency company</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Coinbase</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A leading Digital currency company</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Coinbase</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A leading Digital currency company</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Coinbase</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A leading Digital currency company</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Coinbase</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A leading Digital currency company</span>
                    </span>
                </div>
            </div>
            <div className='people flex flex-col'>
                <span className='people-header flex items-center'>
                    <span className='people-div'></span>
                    <span>Products</span>
                </span>
                <div className='flex flex-wrap mt-2 gap-2'>
                    <span className='people-widget flex items-center'>
                        Latest
                    </span>
                    <span className='people-widget flex items-center'>
                        Wallets
                    </span>
                    <span className='people-widget flex items-center'>
                        Games
                    </span>
                    <span className='people-widget flex items-center'>
                        Trading Apps
                    </span>
                    <span className='people-widget flex items-center'>
                        Social Apps
                    </span>
                </div>
            </div>
            <div className='people-grid flex flex-wrap'>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Polaris</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A cross-chain DeFi platform</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Polaris</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A cross-chain DeFi platform</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Polaris</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A cross-chain DeFi platform</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Polaris</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A cross-chain DeFi platform</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Polaris</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A cross-chain DeFi platform</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Polaris</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A cross-chain DeFi platform</span>
                    </span>
                </div>
                <div className='people-info flex'>
                    <img className='logo' width={50} src="ico-person.svg" alt='person' />
                    <span className='flex flex-col gap-2'>
                        <span style={{ color: "#0f0f1b" }} className='text-ellipsis text-sm font-bold'>Polaris</span>
                        <span className='text-xs' style={{ color: "#979aab" }}>A cross-chain DeFi platform</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
