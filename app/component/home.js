import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.less';
let Home = React.createClass({
			render() {
				return (
						<div className="home">

						<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
							<li data-target="#carousel-example-generic" data-slide-to="1"></li>
							<li data-target="#carousel-example-generic" data-slide-to="2"></li>
							<li data-target="#carousel-example-generic" data-slide-to="3"></li>
							<li data-target="#carousel-example-generic" data-slide-to="4"></li>
						</ol>
						<div  className="carousel-inner" role="listbox">

							<div  className="item active">
								<img src="../../static/images/b1.jpg" alt="..." />

								<div  className="carousel-caption">< /div>

							</div>

							<div  className="item">
								<img src="../../static/images/b2.jpg" alt="..."/>

								<div  className="carousel-caption"></div>
								
							</div>

							<div  className="item">
								<img src="../../static/images/b3.jpg" alt="..."/>

								<div  className="carousel-caption"></div>
								
							</div>

							<div  className="item">
								<img src="../../static/images/b4.jpg" alt="..."/>

								<div  className="carousel-caption"></div>
								
							</div>

							<div  className="item">
								<img src="../../static/images/b5.jpg" alt="..."/>

								<div  className="carousel-caption"></div>
								
							</div>
						
						</div>
					</div>
			<div className="home_list">
				<h4 className="Home_title">
					<strong>电台</strong>
				</h4>

				<ul className="home_radio">
					<li>
						<img src="../../static/images/show1.jpg"/>
						
					</li>
					<li>
						<img src="../../static/images/show2.jpg"/>
					</li>
					
				</ul>
			</div>
			</div>
		)
	}


})

export default Home;