import React, { PropTypes, Component } from 'react';

const SHOW_ALL = 'SHOW_ALL';

class MainSection extends Component {
    constructor(props, context) {
        super(props, context)
    };


    filterEpisodes(episodes) {
        var filteredEpisodes = [];
        var { filter } = this.props;
        if (filter !== SHOW_ALL) {
            filteredEpisodes = episodes.episodes.filter(episode => {
                if (episode.feed !== filter) {
                    return false;
                } else {
                    return true;
                }
            })
        } else {
            filteredEpisodes = episodes.episodes;
        }
        return filteredEpisodes;
    }

    renderContent(filteredEpisodes) {

        if (filteredEpisodes.length !== 0) {
            return (
                <ul>
                    {filteredEpisodes.map(episode =>
                        <li>{episode.name}</li>
                    )}
                </ul>
            )
        } else {
           return (
               <div>No episodes</div>
           )
        }
    }

    render() {
        const { episodes } = this.props;
        var filteredEpisodes = this.filterEpisodes(episodes);
        var content = this.renderContent(filteredEpisodes);
        return (
            <section className="main">
                { content }
            </section>
        )
    }
};

export default MainSection;
