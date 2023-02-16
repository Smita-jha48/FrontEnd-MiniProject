import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Stack,
    Menu,
    MenuItem,
    Box,
    createTheme,
    responsiveFontSizes
} from '@mui/material'
import PropTypes from 'prop-types';
import React, { useState } from 'react'

const data = [
    { id: 1, stories: 'xyz', dependencies: [], developer: [], storyPoints: 4 },
    { id: 2, stories: 'uvw', dependencies: [1], developer: [], storyPoints: 4 },
    { id: 3, stories: 'pqr', dependencies: [], developer: [], storyPoints: 4 },
    { id: 4, stories: 'yut', dependencies: [2, 3], developer: [], storyPoints: 4 }
];


function Item(props) {

    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default function StoryInput() {
    const [stories, setStories] = useState('');
    const [dependencies, setDependencies] = useState([]);
    const [developer, setDeveloper] = useState([]);
    const [storyPoints, setStoryPoints] = useState(0);
    const [storyList, setStoryList] = useState(data);
    const removeItem = (id) => {
        let newStoryList = storyList.filter((story) => story.id !== id);
        setStoryList(newStoryList);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (stories && storyPoints) {
            const newStory = { stories, dependencies, developer, storyPoints };
            const myArray = newStory.dependencies.split(",");
            const myNewArray = myArray.map((item) => {
                return parseInt(item);
            })
            console.log(myNewArray);
            console.log(typeof (myNewArray));
            newStory.dependencies = myNewArray;
            setStoryList((storyList) => {
                return [...storyList, newStory];
            })
        }
    }
    return (
        <>
            <div>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 2,
                    m: 4,
                    justifyContent: 'space-around',
                    bgcolor: 'background.white',
                    borderRadius: 1,
                }} >
                    <Item width={200}>Stories</Item>
                    <Item width={200}>Dependencies</Item>
                    <Item width={200}>Developer</Item>
                    <Item width={200}>Story Points</Item>
                </Box>
                {storyList.map((story) => {
                    const { id, stories, dependencies, developer, storyPoints } = story;
                    return (
                        <Box key={id} sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            p: 2,
                            m: 4,
                            justifyContent: 'space-evenly',
                            bgcolor: 'background.white',
                            borderRadius: 1,
                        }} >
                            <Item width={200}>{stories}</Item>
                            <Item width={200}>{dependencies.toString()}</Item>
                            <Item width={200}>{developer}</Item>
                            <Item width={200}>{storyPoints}</Item>
                            <button onClick={() => removeItem(id)}>-</button>
                        </Box>
                    );
                })}
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='story'>Stories </label>
                    <input type='text' name='story' value={stories} onChange={(e) => setStories(e.target.value)} />
                </div>
                <div>

                    <label htmlFor='dependencies'>Dependencies</label>
                    <input type='text' name='dependencies' value={dependencies} onChange={(e) => setDependencies(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='developers'>Developers </label>
                    <input type='text' name='developers' value={developer} onChange={(e) => setDeveloper(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='storyPoints'>Stories </label>
                    <input type='text' name='storyPoints' value={storyPoints} onChange={(e) => setStoryPoints(e.target.value)} />
                </div>

                <button type='submit'>Add Person</button>
            </form>
        </>

    )
}