<template>
    <v-app>
        <v-app-bar flat color="transparent">
            <div class="d-flex align-center">
                <div class="logo">Bankroll</div>
            </div>
            <v-spacer />
            <div class="d-none d-sm-flex">
                <v-btn variant="text" rounded class="font-weight-medium" to="/faq"> FAQ</v-btn>
                <v-btn variant="text" rounded class="font-weight-medium" to="/campaigns">
                    Campaign</v-btn>
                <!-- <v-btn variant="text" class="font-weight-medium" to="/features"> Features</v-btn> -->
                <v-btn variant="text" rounded class="font-weight-medium"> Resources</v-btn>
            </div>
        </v-app-bar>
        <v-main>
            <v-container>
                <slot />
                <!-- <v-card flat max-width="800" class="mx-auto pa-4">
                </v-card> -->
            </v-container>
        </v-main>
    </v-app>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
.logo {
    font-size: Clamp(24px, 5vw, 32px);
    font-weight: bold;
}

.v-app-bar {
    padding: 0 250px !important;
    border-bottom: 1px solid #e0e0e0 !important;
}

.v-container {
    padding: 40px 200px !important;
    padding-top: 100px !important;
}

@media (max-width: 600px) {
    .v-app-bar {
        padding: 0 !important;
    }

    .v-container {
        padding: 20px 15px !important;
    }
}

/* styling for the entire markdown content */
.v-main {
    font-family: "Roboto", sans-serif;
    color: #333;
    line-height: 1.6;
    padding: 20px;
}

.v-main h1,
.v-main h2,
.v-main h3 {
    font-weight: bold;
    margin-top: 2em;
    margin-bottom: 1em;
    line-height: 1.2;
}

.v-main h1 {
    font-size: 2.2em;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 0.3em;
}

.v-main h2 {
    font-size: clamp(1.5em, 4vw, 1.8em);
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0.2em;
}

.v-main h3 {
    font-size: clamp(1.2em, 4vw, 1.3em);
}

// Paragraphs
.v-main p {
    margin-bottom: 1.2em;
    font-size: 1.05em;
}

// Lists
.v-main ul,
.v-main ol {
    margin-left: 2em;
    margin-bottom: 1.2em;
}

.v-main li {
    margin-bottom: 0.5em;
    font-size: 1em;
}

// Tables
.v-main table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5em;
    background: #fafafa;
    border-radius: 6px;
    overflow: hidden;
}

.v-main th,
.v-main td {
    border: 1px solid #e0e0e0;
    padding: 0.75em 1em;
    text-align: left;
}

.v-main th {
    background: #f5f5f5;
    font-weight: 600;
}

// Blockquotes
.v-main blockquote {
    border-left: 4px solid #1976d2;
    background: #f4f8fb;
    color: #333;
    margin: 1.5em 0;
    padding: 1em 1.5em;
    font-style: italic;
}

// Code blocks
.v-main pre,
.v-main code {
    background: #f5f5f5;
    color: #c7254e;
    border-radius: 4px;
    font-family: "Fira Mono", "Consolas", "Monaco", monospace;
}

.v-main pre {
    padding: 1em;
    overflow-x: auto;
    margin-bottom: 1.2em;
}

.v-main code {
    padding: 0.2em 0.4em;
    font-size: 0.97em;
}

// Links
.v-main a {
    color: #1976d2 !important;
    transition: color 0.2s;
}

.v-main a:hover {
    color: #0d47a1 !important;
}

// Card and container enhancements
.v-card {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
    border-radius: 12px;
    border: 1px solid #ececec;
}

.v-container {
    padding-top: 40px;
    padding-bottom: 40px;
}

a {
    text-decoration: none !important;
    color: inherit !important;
}

table {
    border-collapse: collapse !important;
    border: 1px solid #ddd !important;
    margin: 1.5em 0;
    font-size: 0.98em;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) !important;
    width: 100%;
}

table thead {
    background-color: #f5f5f5 !important;
    border-bottom: 2px solid #ddd !important;
}

table th,
table td {
    padding: 12px 15px !important;
    text-align: left !important;
}

table th {
    font-weight: bold !important;
}

table tr:nth-child(even) {
    background-color: #f9f9f9 !important;
}

blockquote {
    border-left: 4px solid #029dfd !important;
    padding: 12px 15px !important;
    margin: 1em 0 !important;
    background-color: #5fb7ff63 !important;
    font-style: italic !important;
    border-radius: 5px !important;
}

ul {
    padding-left: 20px;
    list-style-type: none !important;
}

ul li {
    margin-bottom: 8px;
    list-style: none !important;
}
</style>
