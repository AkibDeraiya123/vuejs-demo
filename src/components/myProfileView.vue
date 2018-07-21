<template>
	<div style="width:100%;">
		<b-card no-body>
			<b-tabs card class="profile-tabs">
		  		<b-tab title="My Posts" active>
					My post will be here
		  		</b-tab>
		  		<b-tab title="Profile View">
		  			Profile view will be here
		  		</b-tab>
		  		<b-tab title="profile Edit">
		  			Profile edit will be here
		  		</b-tab>
		  	</b-tabs>
		</b-card>
	</div>
</b-tabs>
</template>

<style>
.profile-tabs > div > ul > li {
 	width: 33.33%;
 	text-align: center;
}
ul .nav-tabs {
	border: none;
}
.profile-tabs > div > ul {
	border: none;
	margin: 0;
}
.profile-tabs > div > ul > li.nav-item > a {
	padding: 10px;
    margin-right: 20px;
    font-size: 15px;
    font-weight: 600;
    color: #293241;
    text-transform: uppercase;
    border: none;
    border-radius: 0;
    background: transparent;
    z-index: 2;
    position: relative;
    transition: all 0.3s ease 0s;
}
</style>