import React, { PropTypes, Component } from 'react';

class MainSection extends Component {

    render() {
        const {episodes, actions} = this.props;

        if (episodes.length === 0) {
            return (
                <div>No episodes</div>
            )
        } else {
            return (
                <section className="main">
                    <ul>
                    {episodes.episodes.map(episode =>
                        <li>
                            {episode.name}
                        </li>
                    )}
                    </ul>
                </section>
            )
        }

    }
};

export default MainSection;
