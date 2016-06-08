/**
 * MainSection.js
 *
 * MainSection component
 */

/* Dependencies */
// Libraries
import React, { PropTypes, Component } from 'react';
// Components
import Episode from './Episode';

/* Component Definition */
class Episodes extends Component {
    constructor(props, context) {
        super(props, context)
    };


    renderContent(filteredEpisodes, activeEpisode, setActiveEpisode, unsetActiveEpisode, toggleUnplayed) {
        let content = false;
        if (filteredEpisodes.length !== 0) {
            content = (
                <div>
                    {filteredEpisodes.map(episode =>
                        <Episode key={episode._id}
                            episode={episode}
                            activeEpisode={activeEpisode}
                            setActiveEpisode={setActiveEpisode}
                            unsetActiveEpisode={unsetActiveEpisode}
                            toggleUnplayed={toggleUnplayed}
                        />
                    )}
                </div>
            )
        } else {
           content = ( <div className="no-episodes">No Episodes</div> );
        }
        return content;
    };

    render() {
        const { filteredEpisodes, activeEpisode, setActiveEpisode, unsetActiveEpisode, toggleUnplayed } = this.props;
        let content = this.renderContent(filteredEpisodes, activeEpisode, setActiveEpisode, unsetActiveEpisode, toggleUnplayed);

        return (
            <section className="feeds">
                { content }
            </section>
        )
    }
};


/* Component Prop Types */
Episodes.propTypes = {
    filteredEpisodes: PropTypes.array.isRequired,
    activeEpisode: PropTypes.string.isRequired,
    setActiveEpisode: PropTypes.func.isRequired,
    unsetActiveEpisode: PropTypes.func.isRequired,
    toggleUnplayed: PropTypes.func.isRequired
}

/* Default Export */
export default Episodes;
