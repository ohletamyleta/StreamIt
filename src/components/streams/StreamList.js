    import React from 'react';
    import { connect } from 'react-redux';
    import { fetchStreams } from '../../actions';
    import './StreamList.css';

    class StreamList extends React.Component {
        componentDidMount() {
            this.props.fetchStreams();
        }

         renderList() {
            return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                <div className="content">{stream.title}</div>
                <div className="description">{stream.description}</div>
                <hr />
                </div>
            )
            })
        }

         renderAdmin(stream) {
        if(stream.userId === this.props.currUserId) {
                return (
                    <div>
                    <Link to={`/streams/edit/${stream.id}`} className="editBtn linkBtn">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`}  className="deleteBtn linkBtn">Delete</Link>
                    </div>
                )
            }
        }

         render() {
            return (
            <div>
                <h2 className="header">Streams</h2>
                <div className="list">{this.renderList()}</div>
            </div>
            )
        }
    }

    const mapStateToProps = (state) => {
        return { streams: Object.values(state.streams) };
    }

    export default connect(mapStateToProps, { fetchStreams })(StreamList);