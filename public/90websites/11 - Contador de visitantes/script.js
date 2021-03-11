const count = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/90websites.vercel.app/visitor/?amount=1')
	.then(res => res.json())
	.then(res => {
		count.innerHTML = res.value;
	})
}