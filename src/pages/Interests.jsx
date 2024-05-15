import React from 'react';
import { Link } from 'react-router-dom';

const Interests = () => {
  return (
    <section className="max-container">
      <h1 className="head-text text-left">
        My <span className="blue-gradient_text font-semibold drop-shadow">Interests</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          This is a library of games and books that I enjoy!
        </p>
      </div>
      <div className="mt-7 flex flex-col gap-3">
        <h2 className="subhead-text text-center">
        Games
        </h2>
        <h3 className="title-text text-slate-500">
        2024
        </h3>
        <Link to = 'https://store.steampowered.com/app/2161700/_Reload/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Persona 3 Reload
        </Link>
        <Link to = 'https://store.steampowered.com/app/787480/Phoenix_Wright_Ace_Attorney_Trilogy/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Phoenix Wright: Ace Attorney Trilogy
        </Link>
        <Link to = 'https://store.steampowered.com/app/501300/What_Remains_of_Edith_Finch/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        What Remains of Edith Finch
        </Link>

        <h3 className="title-text text-slate-500">
        2023
        </h3>
        <Link to = 'https://store.steampowered.com/app/1332010/Stray/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Stray
        </Link>

        <h3 className="title-text text-slate-500">
        2022
        </h3>
        <Link to = 'https://store.steampowered.com/app/1113000/Persona_4_Golden/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Persona 4 Golden
        </Link>

        <h3 className="title-text text-slate-500">
        2021
        </h3>
        <p>
        <Link to = 'https://gorogoa.com/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Gorogoa
        </Link><br/>
        Note: Wish I could experience this game for the first time again. I wrote a <Link to = "https://drive.google.com/file/d/1khkaruJbb48D3cLYtUKCQOWwlAGrsKMF/view?usp=sharing"
        className=" text-blue-600 underline">
         review</Link> on this game for one of my classes.
        
        </p>
        <p>
        <Link to = 'https://store.steampowered.com/app/1150690/OMORI/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Omori
        </Link><br/>
        Note: I love the storytelling in this game! I wrote a <Link to = "https://drive.google.com/file/d/17tTKfMmjGTLOMY6pgm-va2nnSZE7Omdp/view?usp=sharing"
        className=" text-blue-600 underline">
          narrative analysis</Link> on Omori for one of my classes. 
        
        </p>
        <Link to = 'https://store.steampowered.com/app/49520/Borderlands_2/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Borderlands 2
        </Link>
        <Link to = 'https://www.playstation.com/en-us/games/it-takes-two/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        It takes Two
        </Link>


        <h3 className="title-text text-slate-500">
        2020
        </h3>
        <Link to = 'https://www.playstation.com/en-us/games/devil-may-cry-5/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Devil May Cry 5
        </Link>
        <Link to = 'https://www.playstation.com/en-us/games/persona-5-royal/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Persona 5 Royal
        </Link>


        <h3 className="title-text text-slate-500">
        2019
        </h3>
        <Link to = 'https://shop.redcandlegames.com/app/devotion'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Devotion
        </Link>
        
        <h3 className="title-text text-slate-500">
        2018
        </h3>
        <p className="mt-2 text-slate-500">
        <Link to = 'https://www.playstation.com/en-us/games/persona-5/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Persona 5
        </Link>
        <br/>
         Note: This is the game that inspired me to be a game developer! I truly love every aspect of Persona 5, notably the music score and game design.
        </p>
      
        <Link to = 'https://www.playstation.com/en-us/games/marvels-spider-man/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Marvel's Spider-Man
        </Link>
        <Link to = 'https://store.steampowered.com/app/322330/Dont_Starve_Together/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Don't Starve Together
        </Link>

        <h3 className="title-text text-slate-500">
        2017
        </h3>
        <Link to = 'https://store.steampowered.com/app/33230/Assassins_Creed_2/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Assassin's Creed II
        </Link>
        <Link to = 'https://store.steampowered.com/app/413150/Stardew_Valley/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        Stardrew Valley
        </Link>
        <Link to = 'https://www.playstation.com/en-us/games/littlebigplanet-3/'
        target="_blank"
        rel = "noopener noreferrer"
        className="font-semibold text-lg text-blue-600"> 
        LittleBigPlanet 3
        </Link>

        <h2 className="subhead-text text-center">
        Books
        </h2>
        <p className='text-right'>
        <p className='italic '>Subliminal</p>
         by Leonard Mlodinow
         <p className='italic mt-5'>If Cats Disappeared from the World</p>
         by Genki Kawamura
         <p className='italic mt-5'>Before the Coffee Gets Cold</p>
         by Toshikazu Kawaguchi
         </p>

            
        

      </div>
    </section>
  )
}

export default Interests