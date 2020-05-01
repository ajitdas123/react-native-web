import React, {Component} from 'react';
import './App.css';
import {View, StyleSheet} from 'react-native-web';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Stars from 'react-native-stars';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Stars
                        default={2.5}
                        count={5}
                        half={true}
                        starSize={50}
                        fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                        emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                        halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                    />
                    <Text>
                        This is Content Section
                    </Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }
});
