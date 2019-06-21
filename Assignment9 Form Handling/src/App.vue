<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h1>Subscription</h1>
                    <hr>
                    <!-- Component control -->
                    <app-full-name v-model="fullName"></app-full-name>
                    <!-- Without component control -->
                    <!-- <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text"
                                id="firstName"
                                class="form-control"
                                v-model="userInfo.firstName">
                    </div> -->
                    <!-- <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input type="text"
                                id="lastName"
                                class="form-control"
                                v-model="userInfo.lastName">
                    </div> -->
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input type="text"
                                id="mail"
                                class="form-control"
                                v-model="userInfo.mail">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password"
                                id="password"
                                class="form-control"
                                v-model="userInfo.password">
                    </div>
                    <div class="form-group">
                        <label for="yes"> Store Data?
                        <input type="radio"
                                id="yes"
                                value="Yes"
                                v-model="storeData"> Yes
                        </label>
                        <label for="no">
                        <input type="radio"
                                id="no"
                                value="No"
                                v-model="storeData"> No
                        </label>
                    </div>
            
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <div>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click.prevent="submit">Submit!
                        </button>
                    </div>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ userInfo.mail }}</p>
                        <p>Password: {{ userInfo.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './FullName.vue';

    export default {
        data() {
            return {
                fullName: 'Max Scwhein',
                userInfo: {
                firstName: '',
                lastName: '',
                mail: '',
                password: ''
                },
                storeData: 'Yes',
                isSubmitted: false
            }
        },
        methods: {
            submit() {
                this.isSubmitted = true;
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
