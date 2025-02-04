# React Native FlatList Performance Optimization

This repository demonstrates a common performance issue encountered when using `FlatList` in React Native with large datasets and provides an optimized solution.

## Problem

Rendering a large number of items in `FlatList` without optimization can lead to significant performance degradation, including slow scrolling, UI lag, and app crashes.  The default behavior of `FlatList` is to render all items at once, which is inefficient for extensive datasets.

## Solution

The solution involves utilizing `FlatList`'s optimization features, such as `getItemLayout`, `keyExtractor`, and `windowSize`.  These optimizations drastically improve rendering performance by reducing the number of calculations and layout passes required.

## Usage

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.

Observe the difference in performance between the unoptimized and optimized versions of `FlatList`.