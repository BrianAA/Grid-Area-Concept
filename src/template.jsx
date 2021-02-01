import React, { Component } from 'react'
import Styled from 'styled-components';
import Grid from './utility/grid'

export default class Template extends Component {
    render() {
        return (
            <div className="grid-wrapper">
                <div className="break"> units</div>
                <Grid id="Top-table"
                    colMax={[2, 10, 2, 6]}
                    colLg={[4, 8, 4]}
                    colMed={[4, 6]}
                    colSm={[10]}
                    
                    areasMax={['. a b c d .']}
                    areasLg={['. a b c .','. d d d .']}
                    areasMed={['. a b .', '. c c .' ,'. d d .']}
                    areasSm={['. a .' ,'. b .' ,'. c .' ,'. d .']}
                    >

                    <div class="area-a">
                        <div class="fake-story">Item</div>
                    </div>
                    <div class="area-b">
                        <div class="fake-story">Item</div>
                    </div>
                    <div class="area-c">
                        <div class="fake-story">Item</div>
                        <div class="fake-story">Item</div>
                        <div class="fake-story">Item</div>
                    </div>
                    <div class="area-d">
                        <div class="fake-story">Item</div>
                        <div class="fake-story">Item</div>
                        <div class="fake-story">Item</div>
                    </div>
                </Grid>
            </div>
        )
    }
}
