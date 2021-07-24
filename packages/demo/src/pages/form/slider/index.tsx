import { Slider } from "@taroify/core"
import * as React from "react"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function BasicSlider() {
  const [value, setValue] = useState(50)
  return <Slider value={value} onChange={setValue} />
}

function RangeSlider() {
  const [value, setValue] = useState([20, 60])
  return <Slider range value={value} onChange={setValue} />
}

function ClampSlider() {
  const [value, setValue] = useState(0)
  return <Slider min={-50} max={50} value={value} onChange={setValue} />
}

function StepSlider() {
  const [value, setValue] = useState(50)
  return <Slider step={10} value={value} onChange={setValue} />
}

function StyledSlider() {
  const [value, setValue] = useState(50)
  return <Slider size={4} activeColor="#ee0a24" value={value} onChange={setValue} />
}

function VerticalSlider() {
  const [value, setValue] = useState(50)
  return <Slider orientation="vertical" value={value} onChange={setValue} />
}

function VerticalRangeSlider() {
  const [value, setValue] = useState([20, 60])
  return (
    <Slider
      range
      orientation="vertical"
      style={{ marginLeft: "100px" }}
      value={value}
      onChange={setValue}
    />
  )
}

export default function SliderDemo() {
  return (
    <Page title="Slider 滑块" className="slider-demo">
      <Block title="基础用法">
        <BasicSlider />
      </Block>
      <Block title="双滑块">
        <RangeSlider />
      </Block>
      <Block title="指定选择范围">
        <ClampSlider />
      </Block>
      <Block title="禁用">
        <Slider value={50} disabled />
      </Block>
      <Block title="指定步长">
        <StepSlider />
      </Block>
      <Block title="自定义样式">
        <StyledSlider />
      </Block>
      <Block title="自定义样式" className="vertical-slider">
        <VerticalSlider />
        <VerticalRangeSlider />
      </Block>
    </Page>
  )
}
