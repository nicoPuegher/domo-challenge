export default function renderHeader() {
	document.querySelector('header').innerHTML = `
		<header>
			<nav class="navbar navbar-expand-lg">
				<div class="container">
					<a class="navbar-brand" href="#">
						<i class="bi bi-question-circle-fill" style="font-size: 60px"></i>
					</a>
					<button
						class="navbar-toggler d-block"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i class="bi bi-list"></i>
					</button>
				</div>
			</nav>
		</header>
	`;
}
