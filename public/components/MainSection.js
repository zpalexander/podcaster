import React, { PropTypes, Component } from 'react';
import { SHOW_ALL } from '../constants/Filters';
import Episode from './Episode';

class MainSection extends Component {
    constructor(props, context) {
        super(props, context)
        this.filterEpisodes = this.filterEpisodes.bind(this);
    };


    filterEpisodes(episodes, activeFeed) {
        var filteredEpisodes = [];
        if (activeFeed !== SHOW_ALL) {
            filteredEpisodes = episodes.filter(episode => {
                let partOfFilter = false;
                if (episode.feed === activeFeed) { partOfFilter = true; }
                return partOfFilter;
            })
        } else {
            filteredEpisodes = episodes;
        }
        return filteredEpisodes;
    };

    renderContent(filteredEpisodes, activeEpisode, setActiveEpisode, unsetActiveEpisode) {
        let content = false;
        if (!filteredEpisodes) {
            content = ( <div>No Episodes</div> )
        }
        if (filteredEpisodes.length !== 0) {
            content = (
                <div>
                    {filteredEpisodes.map(episode =>
                        <Episode key={episode._id}
                            episode={episode}
                            activeEpisode={activeEpisode}
                            setActiveEpisode={setActiveEpisode}
                            unsetActiveEpisode={unsetActiveEpisode}
                        />
                    )}
                </div>
            )
        } else {
           content = ( <div className="episodes">No episodes</div> );
        }
        return content;
    };

    render() {
        const { episodes, activeFeed, activeEpisode, setActiveEpisode, unsetActiveEpisode } = this.props;

        let filteredEpisodes = this.filterEpisodes(episodes, activeFeed);
        //console.log('filteredEpisodes', filteredEpisodes);
        let content = this.renderContent(filteredEpisodes, activeEpisode, setActiveEpisode, unsetActiveEpisode);
        return (
            <section className="content">
                { content }
            </section>
        )
    }
};

MainSection.propTypes = {
    episodes: PropTypes.array.isRequired,
    activeFeed: PropTypes.string.isRequired,
    activeEpisode: PropTypes.string.isRequired,
    setActiveEpisode: PropTypes.func.isRequired,
    unsetActiveEpisode: PropTypes.func.isRequired
}

export default MainSection;
