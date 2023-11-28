import React, {Component} from 'react';
import Iframe from 'react-iframe'

class WebView extends Component {
	render() {
		const {source, style} = this.props;
		const url = source.uri || "";
		return (
			<Iframe url={url}
					styles={style}
			/>
		);
	}
}

export { WebView };
export default WebView;
