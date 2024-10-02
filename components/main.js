export default function renderMain() {
	document.querySelector('#services').innerHTML = `
		<div class="container mt-5">
			<div class="row g-4">
				<div class="col-12 col-sm-6 col-md-6 col-lg-3">
					<div class="circle" style="background-color: #0a59ff">PROTOTYPING</div>
				</div>
				<div class="col-12 col-sm-6 col-md-6 col-lg-3">
					<div class="circle" style="background-color: #b302fe">BRANDING</div>
				</div>
				<div class="col-12 col-sm-6 col-md-6 col-lg-3">
					<div class="circle" style="background-color: #3fff43">DESING</div>
				</div>
				<div class="col-12 col-sm-6 col-md-6 col-lg-3">
					<div class="circle" style="background-color: #f92b05">STRATEGY</div>
				</div>
			</div>
		</div>
	`;

	document.querySelector('#clients').innerHTML = `
		<section class="container">
			<h2 class="section-title">We worked with the world's biggest brands</h2>

			<div class="row">
				<div class="col-12 col-sm-6 col-md-4 col-lg-2">
					<div class="icon-div">
						<i class="bi bi-google"></i>
						<span class="brand-name">Google</span>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md-4 col-lg-2">
					<div class="icon-div">
						<i class="bi bi-facebook"></i>
						<span class="brand-name">Facebook</span>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md-4 col-lg-2">
					<div class="icon-div">
						<i class="bi bi-apple"></i>
						<span class="brand-name">Apple</span>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md-4 col-lg-2">
					<div class="icon-div">
						<i class="bi bi-twitter"></i>
						<span class="brand-name">Twitter</span>
					</div>
				</div>
				<div class="col-12 col-sm-6 col-md-4 col-lg-2" >
					<div class="icon-div">
						<i class="bi bi-amazon"></i>
						<span class="brand-name">Amazon</span>
					</div>
				</div>
			</div>
		</section>
	`;
}
