import React, { PropTypes, Component } from 'react';
import { SHOW_ALL } from '../constants/Filters';
import Episode from './Episode';

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
    };

    renderContent(filteredEpisodes, activeEpisode, setActiveEpisode, unsetActiveEpisode) {
        if (!filteredEpisodes) {
            return ( <div>No Episodes</div> )
        }
        if (filteredEpisodes.length !== 0) {
            return (
                <div>
                    {filteredEpisodes.map(episode =>
                        <Episode key={episode._id}
                            episode={episode}
                            activeEpisode={activeEpisode}
                            setActiveEpisode={setActiveEpisode}
                            unsetActiveEpisode={unsetActiveEpisode} />
                    )}
                </div>
            )
        } else {
           return (
               <div className="episodes">No episodes</div>
           )
        }
    };

    render() {
        const { episodes, activeEpisode, setActiveEpisode, unsetActiveEpisode } = this.props;

        var filteredEpisodes = this.filterEpisodes(episodes);
        var content = this.renderContent(filteredEpisodes, activeEpisode, setActiveEpisode, unsetActiveEpisode);
        return (
            <section className="content">
                { content }
            </section>
        )
    }
};

export default MainSection;
