<template functional>
  <h1>{{ props.msg }}</h1>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    msg: String
  }
}
</script>
