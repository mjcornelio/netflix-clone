import React from 'react'
import '../LoginScreen.css'
import {BsPlusLg} from 'react-icons/bs'


const Questions = () => {
    return ( 
        <section className="section-question">
                <h1>Frequently Asked Questions</h1>
                <div className="question" tabIndex="0">
                    <div className="question-text">
                        <h2>What is Netflix?</h2>
                        <BsPlusLg className='BsPlus'/>
                    </div>
                    <div className="question-desc">
                        <h2> Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                             movies, anime, documentaries, and more on thousands of internet-connected devices.
                        <br/> <br/>
                            You can watch as much as you want, whenever you want without a single commercial – all for
                            one low monthly price. There's always someth1ng new to discover and new TV shows and movies 
                            are added every week!</h2>
                    </div>
                </div>

                <div className="question" tabIndex="0">
                    <div className="question-text">
                        <h2>How much does Netflix cost?</h2>
                        <BsPlusLg className='BsPlus'/>
                    </div>
                    <div className="question-desc">
                        <h2> Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for 
                            one fixed monthly fee. Plans range from ₱i49 to ₱549 a month. No extra costs, no contracts.</h2>
                    </div>
                </div>

                <div className="question" tabIndex="0">
                    <div className="question-text">
                        <h2>Where can I watch?</h2>
                        <BsPlusLg className='BsPlus'/>
                    </div>
                    <div className="question-desc">
                        <h2> Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the 
                            web at netflix.com from your personal computer or on any internet-connected device that 
                            offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players 
                            and game consoles.
                            <br/> <br/>
                            You can also download your favorite shows with the iOS, Android, or Windows i0 app. Use 
                            downloads to watch wh1le you're on the go and without an internet connection. Take Netflix 
                            with you anywhere.</h2>
                    </div>
                </div>

                <div className="question" tabIndex="0">
                    <div className="question-text">
                        <h2>How do I cancel?</h2>
                        <BsPlusLg className='BsPlus'/>
                    </div>
                    <div className="question-desc">
                        <h2> Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel 
                            your account online in two clicks. There are no cancellation fees – start or stop your account 
                            anytime.</h2>
                    </div>
                </div>

                <div className="question" tabIndex="0">
                    <div className="question-text">
                        <h2>Where can I watch Netflix?</h2>
                        <BsPlusLg className='BsPlus'/>
                    </div>
                    <div className="question-desc">
                        <h2> Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning 
                            Netflix originals, and more. Watch as much as you want, anytime you want.</h2>
                    </div>
                </div>

                <div className="question" tabIndex="0">
                    <div className="question-text">
                        <h2>Is Netflix good for kids?</h2>
                        <BsPlusLg className='BsPlus'/>
                    </div>
                    <div className="question-desc">
                        <h2> The Netflix Kids experience is included in your membersh1p to give parents control wh1le kids enjoy 
                            family-friendly TV shows and movies in their own space.
                            <br/> <br/>
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of 
                            content kids can watch and block specific titles you don’t want kids to see.</h2>
                    </div>
                    </div>
    </section>
     );
}
 
function Article() {
  return (
    <section className='article_container'>
        <article className='card_story_container'>
            <div className="card_story">
                <div className="card_text">
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                </div>
            
                <div className="card_story_animation">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" className="monitor" />
                    <video autoPlay muted playsInline loop >
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type='video/mp4'/>
                    </video>
                </div>
            </div>
        </article>
        <article className='card_story_container'>
            <div className="card_story">
                <div className="card_story_animation phone">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" className="monitor" />
                    <div className="download">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                        <div className="download_text">
                            <h1>Stranger Things</h1>
                            <h3>Downloading...</h3>
                        </div>
                    </div>
                </div>
                <div className="card_text">
                    <h1>Download your shows to watch offline.</h1>
                    <h2>Save your favorites easily and always have something to watch.</h2>
                </div>
            </div>
        </article>
        <article className='card_story_container'>
            <div className="card_story">
                <div className="card_text">
                    <h1>Watch everywhere.</h1>
                    <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                </div>
            </div>
        </article>
        <article className='card_story_container'>
            <div className="card_story">
                <div className="card_story_animation">
                    <img src="https://occ-0-1762-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" alt="" className="monitor" />
                </div>
                <div className="card_text">
                    <h1>Create profiles for kids.</h1>
                    <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                </div>
            </div>
        </article>

        <article className='card_story_container questions_card'>
            <div className="card_story">
                <Questions />
            </div>
        </article>
    </section>
    
  )
}

export default Article