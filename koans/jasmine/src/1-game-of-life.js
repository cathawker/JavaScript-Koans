function isCellAliveInNextGeneration(isCellAlive, numberOfNeighbours) {
    return numberOfNeighbours === 3 || isCellAlive && numberOfNeighbours === 2;
}
