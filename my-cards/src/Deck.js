import React, {useEffect, useState} from "react";
import Card from "./Card";
import axios from "axios";
import "./Deck.css";


const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

function Deck() {
    const [deck, setDeck] = useState(null);
    const [ drawn, setDrawn] = useState([]);
    const [isShuffling, setIsShuffling] = useState(false);

    useEffect(function loadDeckFromAPI(){
        async function fetchData(){
            const d = await axios.get(`${API_BASE_URL}/new/shuffle/`);
            setDeck(d.data);
        }
        fetchData();
    });

    // not showing up ??
    async function draw(){
        try {
            const drawRes = await axios.get(`${API_BASE_URL}/${deck.deck_id}/draw/`);
            if (drawRes.data.remaining === 0) throw new Error("Deck Empty!!");
            const card = drawRes.data.cards[0];

            setDrawn(d=>[
                ...d,
                {
                    id: card.code,
                    name: card.suit + " " + card.value,
                    image: card.image,
                },
            ]);
        } catch (err){
            alert(err);
        }
    }
    async function startShuffling() {
        setIsShuffling(true);
        try {
            await axios.get(`${API_BASE_URL}/${deck.deck_id}/shuffle/`);
            setDrawn([]);
        }catch(err){
            alert(err);
        }finally {
            setIsShuffling(false);
        }
    }

    function renderDrawBtnIfOk(){
        if (!deck) return null;
        return (
            <button
            className="New-Deck"
            onClick={draw}
            disabled={isShuffling}>
                DRAW
            </button>
        );
    }

    function renderShuffleBtnIfOk() {
        if (!deck) return null;
        return(
            <button
            className="New-Deck"
            onClick={startShuffling}
            disabled = {isShuffling}>
                SHUFFLE DECK
            </button>
        );
    }

    return (
        <main className="Deck">
            {renderDrawBtnIfOk()}
            {renderShuffleBtnIfOk()}

            <div className="Deck-cardarea">{
            drawn.map(c => (
                <Card 
                key={c.id} 
                name={c.name}
                image = {c.image}
                />
            ))}
                </div>
        </main>
    );
}

export default Deck;