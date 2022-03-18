import { useEffect, useState } from 'react';
import { Flashcard } from './components/Flashcard';
import './App.scss';

const url = 'http://localhost:5000/flashcards';

function App() {
	const [flashcards, setFlashcards] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const flashcards = await response.json();
			setFlashcards(flashcards);
		})();
	}, []);

	return (
		<div className="App">
			<h1>Flashcards</h1>
			<div>We have {flashcards.length} flashcards.</div>
			<div className="flashcards">
				{flashcards.map((flashcard) => {
					return (
						<Flashcard flashcard={flashcard} />
					)
				})}
			</div>
		</div>
	);
}

export default App;