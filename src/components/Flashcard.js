export const Flashcard = ({flashcard}) => {
	return (
		<li>{flashcard.category}: {flashcard.front}</li>
	)
}