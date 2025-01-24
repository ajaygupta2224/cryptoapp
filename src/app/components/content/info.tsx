import React from 'react'
import "./info.scss"

export default function info() {
  return (
    <div className='info'>
        <div className='info-header'>
            <div className='flex gap-1 text-xs items-center mb-10' style={{color:'#3f4049'}}>
                <span>Directory</span>
                <img className='rotate-ico' width={10} src="ico-pre-arrow.svg" alt='person' />
                <span className='people'>People</span>
                <img className='rotate-ico' width={10} src="ico-pre-arrow.svg" alt='person' />
                <span className='founder'>Founder</span>
            </div>
            <div className='flex gap-5'>
            <img className='ico-person' width={60} src="ico-person.svg" alt='person' />
            <div className='flex flex-col gap-2'>
            <span className='text-3xl font-bold text-black'> Ross Ulbricht</span>
            <span className='text-sm' style={{color:'#9797a8'}}>Creator at Silk Road</span>
            </div>
            </div>
        </div>
        <div className='desc'>
            <span className='desc-info-header'>
            Ross Ulbricht Bio
            </span>
            <div className='desc-info'>
            Ross William Ulbricht (born March 27, 1984) is a convicted American darknet market operator and narcotics trafficker, best known for creating and running the Silk Road website from 2011 until his arrest in 2013. He was known under the pseudonym “Dread Pirate Roberts,” after the fictional character in the novel The Princess Bride (1973) and its 1987 film adaptation.
            Ulbricht was convicted of money laundering, computer hacking, conspiracy to traffic fraudulent identity documents, and conspiracy to traffic narcotics by means of the Internet in February 2015.  He is currently serving a double life sentence plus forty years without the possibility of parole. The U.S. Court of Appeals for the Second Circuit upheld the conviction and sentence in May 2017. The Supreme Court of the United States declined to hear a further appeal in June 2018.  The Maryland prosecution dismissed with prejudice a five-year-old pending indictment in July 2018.
            </div>
            <span className='desc-header'>
                Early Life Education
            </span>
            <div className='desc-info'>
            Ulbricht grew up in the Austin metropolitan area. He was a Boy Scout, attaining the rank of Eagle Scout. He attended West Ridge Middle School, and Westlake High School, both near Austin. He graduated from high school in 2002.

He attended the University of Texas at Dallas on a full academic scholarship, and graduated in 2006 with a bachelor’s degree in physics.  He then attended Pennsylvania State University, where he was in a master’s degree program in materials science and engineering and studied crystallography. By the time Ulbricht graduated, he had become interested in libertarian economic theory. In particular, Ulbricht adhered to the political philosophy of Ludwig von Mises, supported Ron Paul, and participated in college debates to discuss his economic views.

Ulbricht graduated from Penn State in 2009 and returned to Austin. By this time Ulbricht, finding regular employment unsatisfying, wanted to become an entrepreneur, but his first attempts to start his own business failed. He tried day trading and started a video game company. His mother claimed that his LinkedIn profile referred to a massively multiplayer online role-playing game, not a darknet market, when it stated, “I am creating an economic simulation to give people a first-hand experience of what it would be like to live in a world without the systemic use of force.”  He eventually partnered with his friend Donny Palmertree to help build an online used bookseller, Good Wagon Books.
            </div>
        </div>
    </div>
  )
}
