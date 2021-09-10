exports.createPages = async ({ actions, graphql, reporter }) => {
  const res = await graphql(`
    query {
      allDatoCmsRoom {
        nodes {
          slug
        }
      }
    }
  `)

  if (res.errors) {
    reporter.panic("No se encontraron resultados", res.errors)
  }
  const rooms = res.data.allDatoCmsRoom.nodes
  rooms.forEach(room => {
    actions.createPage({
      path: "rooms/" + room.slug,
      component: require.resolve("./src/components/room.js"),
      context: {
        slug: room.slug,
      },
    })
  })
}
