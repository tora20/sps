// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
 
/**
 * Adds a random fact to the page.
 */
function addRandomGreeting() {
  const facts =
      ['I walked a full 20 miles in one day in support of the Walk for Hunger.',
       'I was on TV before!', 'I love colorful Colorado (:', 
       'I enjoy kpop dance with college friends', 'I also go by Tora!',
    'I can rollerblade and iceskate backwards'];

  // Pick a random fact.
  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = randomFact;
}
