(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();function a(){document.querySelector("header").innerHTML=`
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
	`}function r(){document.querySelector("#services").innerHTML=`
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
	`,document.querySelector("#clients").innerHTML=`
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
	`}function n(){document.querySelector("footer").innerHTML=`
		<p>By Nicolas Puegher | Email: nicopuegher@gmail.com | Portfolio: https://nicopuegher.github.io/portfolio</p>
		<p>Este es el desafío de Frontend para DOMO. Nunca había usado Bootstrap pero intenté hacer todo lo posible leyendo la documentación y presentar algo lo más rápido posible. Obviamente hay mucho margen de mejora pero estoy satisfecho con el resultado. Utilice marcas al azar para simplificar el tema de los iconos, espero no sea un problema.</p>
	`}document.addEventListener("DOMContentLoaded",function(){a(),r(),n()});
