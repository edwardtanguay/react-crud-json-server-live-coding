export const Flashcard = ({ flashcard }) => {
	return (
		<div className="flashcard">
			<div className="front">
				{flashcard.category}: {flashcard.front}
			</div>
			<div className="back">
				{flashcard.back}
			</div>
		</div>
	)
}