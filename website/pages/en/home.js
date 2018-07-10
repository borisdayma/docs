const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
import {Button, Icon, Card} from 'semantic-ui-react';

const siteConfig = require(process.cwd() + '/siteConfig.js');

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

class Home extends React.Component {
  render() {
  	let language = this.props.language || '';
  	const quickLinksCol1 = [{title: "Getting Started", 
  							desc: "Try W&B for free in seconds.", 
  							link:'started.html'}, 
  							{title: "Python API Reference",
  							 desc: "Customize analysis and track additional metrics.",
  							 link: 'configs.html'}]

  	const quickLinksCol2 =[{title: "Example Projects", 
  							desc: "See what W&B can do, and how.", 
  							link:'examples.html'}, 
  							{title: "FAQ",
  							 desc: "Your questions, already answered.",
  							 link: 'faq.html'}]


  	const pageDesc = {title: "Documentation, Guides and Examples", desc: "Welcome to Weights and Biases! Get familiar with our product and explore its features"}

  	return(
  		<Container>
	  		<div>
		  		<h2>{pageDesc.title}</h2>
		  		<p>{pageDesc.desc}</p>
		  	</div>	

		  	<div className="allCards">
			  	<div className="cardCol1">
			  		{quickLinksCol1.map(quickLink => (
			  			<a href={docUrl(quickLink.link, language)}>
			  			 	<div className="cardDisplay">
			  			 		<h3>{quickLink.title}</h3>
			  			 		<p>{quickLink.desc}</p>
			  			 	</div>
			  			</a>
			  		))}
		  		 </div>

		  		<div className="cardCol2">
			  		{quickLinksCol2.map(quickLink => (
			  			<a href={docUrl(quickLink.link, language)}>
			  			 	<div className="cardDisplay">
			  			 		<h3>{quickLink.title}</h3>
			  			 		<p>{quickLink.desc}</p>
			  			 	</div>
			  			</a>
			  		))}
			  	</div>

	  		 </div>


	  	</Container>
  	);
  }
}


module.exports = Home;