<template>
<section>
    <h2>{{ teamName }}</h2>
    <ul>
        <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
    <router-link to="team/t2">Go To Team</router-link>
</section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
    components: {
        UserItem
    },

    inject: ['users', 'teams'],
    data() {
        return {
            teamName: '',
            members: [],
        }
    },

    // {
    //   return {
    //     teamName: 'Test',
    //     members: [
    //       { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
    //       { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
    //     ],
    //   };
    // },
    created() {
        // console.log(this.users,this.teams)
        const teamId = this.$route.params.teamId
        // console.log("selected team",teamId)
        const selectedTeam = this.teams.find((team) => team.id === teamId)
        // console.log("selected team",selectedTeam)
        const members = selectedTeam.members
        const selectedMembers = []
        for (const member of members) {
            const selectedUser = this.users.find(user => user.id === member)
            selectedMembers.push(selectedUser)
        }
        this.members = selectedMembers
        this.team = selectedTeam.name
    },
    beforeRouteLeave() {
        const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
        if (!answer) return false
    }
};
</script>

<style scoped>
section {
    margin: 2rem auto;
    max-width: 40rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 12px;
}

h2 {
    margin: 0.5rem 0;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
