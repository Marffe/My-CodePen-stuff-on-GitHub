const quotes_array = ["The only true wisdom is in knowing you know nothing.", "The unexamined life is not worth living.", "I cannot teach anybody anything. I can only make them think", "There is only one good, knowledge, and one evil, ignorance.", "Be kind, for everyone you meet is fighting a hard battle.", "Wonder is the beginning of wisdom."]
const btn = document.querySelector("button")
const p_quotes = document.getElementById("quotes_display")

btn.onclick = abc

function abc(quotes_array){
	p_quotes.innerText = quotes_array[Math.floor(Math.random() * quotes_array.length)]
}